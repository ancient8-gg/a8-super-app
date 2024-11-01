import { PropsWithChildren } from 'react'
import {
  QueryClient,
  QueryClientProvider as TanstackQueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
})

const QueryClientProvider = ({ children }: PropsWithChildren) => (
  <TanstackQueryClientProvider client={queryClient}>
    {children}
  </TanstackQueryClientProvider>
)

export default QueryClientProvider
