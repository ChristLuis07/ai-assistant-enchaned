declare module 'midtrans-client' {
  namespace midtransClient {
    class Snap {
      constructor(config: {
        isProduction: boolean
        serverKey: string
        clientKey: string
      })
      createTransaction(
        param: any
      ): Promise<{ token: string; redirect_url: string }>
    }
  }
  export = midtransClient
}
