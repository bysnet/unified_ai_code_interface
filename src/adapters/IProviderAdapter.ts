export interface IProviderAdapter {
  sendMessage(prompt: string, history: any[]): Promise<any>;
  getUsage(response: any): any;
  getConfigSchema(): any;
}
