import React, { useEffect, useRef } from 'react';

let tvScriptLoadingPromise;

export default function TradingViewWidget() {
  const onLoadScriptRef = useRef();

  useEffect(
    () => {
      onLoadScriptRef.current = createWidget;

      if (!tvScriptLoadingPromise) {
        tvScriptLoadingPromise = new Promise((resolve) => {
          const script = document.createElement('script');
          script.id = 'tradingview-widget-loading-script';
          script.src = 'https://s3.tradingview.com/tv.js';
          script.type = 'text/javascript';
          script.onload = resolve;

          document.head.appendChild(script);
        });
      }

      tvScriptLoadingPromise.then(() => onLoadScriptRef.current && onLoadScriptRef.current());

      return () => onLoadScriptRef.current = null;

      function createWidget() {
        if (document.getElementById('tradingview_09c5d') && 'TradingView' in window) {
          new window.TradingView.widget({
            autosize: true,
            symbol: "NASDAQ:AAPL",
            timezone: "Etc/UTC",
            theme: "dark",
            style: "1",
            gridColor: "rgba(24,26,31 , 1)",
            locale: "en",
            enable_publishing: false,
            withdateranges: true,
            range: "YTD",
            backgroundColor: "rgba(24,26,31 , 1)",
            hide_side_toolbar: false,
            allow_symbol_change: true,
            container_id: "tradingview_09c5d",
            toolbar_bg: "#181A1F",
            color:"#181A1F",
            toolbar_bg: "#181A1F",
            
          });
        }
      }
    },
    []
  );

  return (
    <div className='tradingview-widget-container'>
      <div id='tradingview_09c5d' className='h-[70vh] w-full' />
      <div className="tradingview-widget-copyright">
      </div>
    </div>
  );
}