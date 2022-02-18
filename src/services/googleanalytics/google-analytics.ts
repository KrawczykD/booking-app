class googleAnalytics {
  /**
   * @method sendEvent sent event to google analytics
   * @param event google analytics event name
   * @param category event category name
   * @param value number value represents level of important
   *
   */

  static sendEvent(event: string, category: string, value: number): void {
    gtag('event', event, {
      event_category: category,
      event_label: document.location.host,
      value: value
    });
  }
}
export default googleAnalytics;
