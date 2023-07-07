import { render, renderHook, screen, waitFor } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useTestReactQueryQuery } from "@/hooks/testReactQueryQuery";
import { DataComponent } from "./DataComponent";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

const wrapper = ({ children }: { children: React.ReactNode }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

// TESTING THE HOOK ITSELF. It's recommended to mock the network request, they use nock
// https://tanstack.com/query/v4/docs/react/guides/testing#testing-network-calls
// describe("Query Hook", () => {
//   it("Tests the query hook", async () => {
//     const { result } = renderHook(() => useTestReactQueryQuery(), {
//       wrapper,
//     });
//     await waitFor(() => expect(result.current.isSuccess).toBe(true));
//   });
// });

const mockedTestReactQuery = useTestReactQueryQuery as jest.Mock;
jest.mock("../hooks/testReactQueryQuery.ts");

describe("DataComponent", () => {
  beforeEach(() => {
    mockedTestReactQuery.mockImplementation(() => ({
      isLoading: true,
    }));
  });

  it("Mock the query component component", async () => {
    mockedTestReactQuery.mockImplementation(() => ({
      isLoading: false,
      data: { title: "Testing", id: 12345 },
    }));
    render(<DataComponent />, { wrapper });

    const title = await waitFor(() => screen.getByText("Testing"));
    const id = screen.getByText("12345");
    expect(title).toBeInTheDocument();
    expect(id).toBeInTheDocument();
  });
});
