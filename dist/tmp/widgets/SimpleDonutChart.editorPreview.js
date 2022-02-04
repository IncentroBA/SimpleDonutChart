'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var react = require('react');

function getDefaultExportFromNamespaceIfNotNamed (n) {
	return n && Object.prototype.hasOwnProperty.call(n, 'default') && Object.keys(n).length === 1 ? n['default'] : n;
}

function styleInject(css, ref) {
  if (ref === void 0) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') {
    return;
  }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ".simple-donut-chart-widget {\n    align-items: center;\n    display: flex;\n    margin-bottom: 24px;\n    position: relative;\n}\n\n.simple-donut-chart-widget .chart-container {\n    position: relative;\n}\n\n.simple-donut-chart-widget .donut-percentage {\n    border-radius: 50%;\n    position: absolute;\n    pointer-events: none;\n    text-align: center;\n    top: 50%;\n    left: 50%;\n    height: 86%;\n    width: 86%;\n    transform-origin: 0 0;\n}\n\n.simple-donut-chart-widget .donut-percentage span {\n    display: inline-block;\n}\n\n.simple-donut-chart-widget .donut {\n    align-items: center;\n    display: flex;\n    flex: 1;\n    height: 100%;\n    justify-content: center;\n    margin-right: 16px;\n    width: 100%;\n}\n\n.simple-donut-chart-widget .donut-slice {\n    transition: stroke-width 0.2s ease;\n    cursor: pointer;\n}\n\n.simple-donut-chart-widget .simple-donut-chart-info {\n    position: relative;\n}\n\n.simple-donut-chart-widget .donutchart-total {\n    font-weight: 700;\n    line-height: 1;\n}\n\n.simple-donut-chart-widget .donutchart-legend {\n    margin-bottom: 30px;\n    padding: 0;\n    display: flex;\n    flex-direction: column;\n    width: max-content;\n}\n\n.simple-donut-chart-widget .donutchart-legend p:first-of-type {\n    flex: 1;\n}\n\n.simple-donut-chart-widget .donutchart-legend li {\n    align-items: center;\n    display: flex;\n    list-style: none;\n}\n\n.simple-donut-chart-widget .donutchart-legend li:hover {\n    cursor: pointer;\n}\n\n.simple-donut-chart-widget .donutchart-legend p {\n    margin: 0;\n}\n\n.simple-donut-chart-widget .donutchart-legend svg {\n    margin-right: 8px;\n}\n\n.simple-donut-chart-widget .donutchart-value {\n    padding-left: 16px;\n}\n\n.simple-donut-chart-widget .donutchart-chart {\n    align-self: center;\n    display: flex;\n    grid-template-columns: repeat(100, 1fr);\n    grid-auto-flow: column;\n    margin: 0;\n    padding: 0;\n}\n\n.simple-donut-chart-widget .donutchart-chart li {\n    list-style: none;\n    min-height: 20px;\n    position: relative;\n}\n\n.simple-donut-chart-widget .donutchart-chart.donutchart-chart--rounded li:first-of-type {\n    border-top-left-radius: 50px;\n    border-bottom-left-radius: 50px;\n}\n\n.simple-donut-chart-widget .donutchart-chart.donutchart-chart--rounded li:last-of-type {\n    border-top-right-radius: 50px;\n    border-bottom-right-radius: 50px;\n}\n\n.simple-donut-chart-widget .donutchart-chart li:hover {\n    cursor: pointer;\n}\n\n.simple-donut-chart-widget .donutchart-legend li .donutchart-tooltip {\n    background-color: white;\n    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.3);\n    border-radius: 4px;\n    display: flex;\n    left: var(--x);\n    opacity: 0;\n    padding: 4px 8px;\n    position: fixed;\n    pointer-events: none;\n    transition: opacity 0.2s ease, transform 0.2s ease;\n    top: var(--y);\n    will-change: opacity;\n    width: max-content;\n    z-index: 1;\n}\n\n.simple-donut-chart-widget .donutchart-legend li .donutchart-tooltip.show-tooltip {\n    opacity: 1;\n    transform: translateY(-60%);\n}\n\n.simple-donut-chart-widget .donutchart-chart li .donutchart-tooltip p {\n    margin: 0;\n    padding: 4px 8px;\n}\n\n.simple-donut-chart-widget .donutchart-meter {\n    border-top: solid 1px black;\n    display: flex;\n    justify-content: space-between;\n}\n\n.simple-donut-chart-widget .donutchart-meter .item {\n    background-color: black;\n    height: 9px;\n    width: 1px;\n}\n\n.simple-donut-chart-widget .donutchart-indicators {\n    display: flex;\n}\n\n.simple-donut-chart-widget .donutchart-indicator {\n    flex: 1;\n}\n\n.simple-donut-chart-widget .donutchart-indicator:nth-child(2) {\n    text-align: center;\n}\n\n.simple-donut-chart-widget .donutchart-indicator:last-of-type {\n    text-align: right;\n}\n\n.simple-donut-chart-widget .donutchart-tooltip {\n    position: absolute;\n}\n\n@media print {\n    .simple-donut-chart-widget .donut-percentage {\n        height: 70%;\n        width: 70%;\n    }\n\n    .simple-donut-chart-widget .donut-percentage span {\n        font-size: 10px;\n        font-weight: bold;\n    }\n\n    .donutchart-legend li .donutchart-tooltip {\n        display: none;\n    }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlNpbXBsZURvbnV0Q2hhcnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixTQUFTO0lBQ1QsV0FBVztJQUNYLFVBQVU7SUFDVixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLE9BQU87SUFDUCxZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxrQ0FBa0M7SUFDbEMsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLFVBQVU7SUFDVixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLE9BQU87QUFDWDs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsdUNBQXVDO0lBQ3ZDLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1QsVUFBVTtBQUNkOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSw0QkFBNEI7SUFDNUIsK0JBQStCO0FBQ25DOztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsMENBQTBDO0lBQzFDLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsY0FBYztJQUNkLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLG9CQUFvQjtJQUNwQixrREFBa0Q7SUFDbEQsYUFBYTtJQUNiLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksVUFBVTtJQUNWLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSwyQkFBMkI7SUFDM0IsYUFBYTtJQUNiLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixXQUFXO0lBQ1gsVUFBVTtBQUNkOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLE9BQU87QUFDWDs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJO1FBQ0ksV0FBVztRQUNYLFVBQVU7SUFDZDs7SUFFQTtRQUNJLGVBQWU7UUFDZixpQkFBaUI7SUFDckI7O0lBRUE7UUFDSSxhQUFhO0lBQ2pCO0FBQ0oiLCJmaWxlIjoiU2ltcGxlRG9udXRDaGFydC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2ltcGxlLWRvbnV0LWNoYXJ0LXdpZGdldCB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uc2ltcGxlLWRvbnV0LWNoYXJ0LXdpZGdldCAuY2hhcnQtY29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5zaW1wbGUtZG9udXQtY2hhcnQtd2lkZ2V0IC5kb251dC1wZXJjZW50YWdlIHtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgaGVpZ2h0OiA4NiU7XG4gICAgd2lkdGg6IDg2JTtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiAwIDA7XG59XG5cbi5zaW1wbGUtZG9udXQtY2hhcnQtd2lkZ2V0IC5kb251dC1wZXJjZW50YWdlIHNwYW4ge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLnNpbXBsZS1kb251dC1jaGFydC13aWRnZXQgLmRvbnV0IHtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleDogMTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4uc2ltcGxlLWRvbnV0LWNoYXJ0LXdpZGdldCAuZG9udXQtc2xpY2Uge1xuICAgIHRyYW5zaXRpb246IHN0cm9rZS13aWR0aCAwLjJzIGVhc2U7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uc2ltcGxlLWRvbnV0LWNoYXJ0LXdpZGdldCAuc2ltcGxlLWRvbnV0LWNoYXJ0LWluZm8ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnNpbXBsZS1kb251dC1jaGFydC13aWRnZXQgLmRvbnV0Y2hhcnQtdG90YWwge1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgbGluZS1oZWlnaHQ6IDE7XG59XG5cbi5zaW1wbGUtZG9udXQtY2hhcnQtd2lkZ2V0IC5kb251dGNoYXJ0LWxlZ2VuZCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XG59XG5cbi5zaW1wbGUtZG9udXQtY2hhcnQtd2lkZ2V0IC5kb251dGNoYXJ0LWxlZ2VuZCBwOmZpcnN0LW9mLXR5cGUge1xuICAgIGZsZXg6IDE7XG59XG5cbi5zaW1wbGUtZG9udXQtY2hhcnQtd2lkZ2V0IC5kb251dGNoYXJ0LWxlZ2VuZCBsaSB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cbi5zaW1wbGUtZG9udXQtY2hhcnQtd2lkZ2V0IC5kb251dGNoYXJ0LWxlZ2VuZCBsaTpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uc2ltcGxlLWRvbnV0LWNoYXJ0LXdpZGdldCAuZG9udXRjaGFydC1sZWdlbmQgcCB7XG4gICAgbWFyZ2luOiAwO1xufVxuXG4uc2ltcGxlLWRvbnV0LWNoYXJ0LXdpZGdldCAuZG9udXRjaGFydC1sZWdlbmQgc3ZnIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDhweDtcbn1cblxuLnNpbXBsZS1kb251dC1jaGFydC13aWRnZXQgLmRvbnV0Y2hhcnQtdmFsdWUge1xuICAgIHBhZGRpbmctbGVmdDogMTZweDtcbn1cblxuLnNpbXBsZS1kb251dC1jaGFydC13aWRnZXQgLmRvbnV0Y2hhcnQtY2hhcnQge1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwMCwgMWZyKTtcbiAgICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xufVxuXG4uc2ltcGxlLWRvbnV0LWNoYXJ0LXdpZGdldCAuZG9udXRjaGFydC1jaGFydCBsaSB7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICBtaW4taGVpZ2h0OiAyMHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnNpbXBsZS1kb251dC1jaGFydC13aWRnZXQgLmRvbnV0Y2hhcnQtY2hhcnQuZG9udXRjaGFydC1jaGFydC0tcm91bmRlZCBsaTpmaXJzdC1vZi10eXBlIHtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1MHB4O1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDUwcHg7XG59XG5cbi5zaW1wbGUtZG9udXQtY2hhcnQtd2lkZ2V0IC5kb251dGNoYXJ0LWNoYXJ0LmRvbnV0Y2hhcnQtY2hhcnQtLXJvdW5kZWQgbGk6bGFzdC1vZi10eXBlIHtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNTBweDtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNTBweDtcbn1cblxuLnNpbXBsZS1kb251dC1jaGFydC13aWRnZXQgLmRvbnV0Y2hhcnQtY2hhcnQgbGk6aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnNpbXBsZS1kb251dC1jaGFydC13aWRnZXQgLmRvbnV0Y2hhcnQtbGVnZW5kIGxpIC5kb251dGNoYXJ0LXRvb2x0aXAge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJveC1zaGFkb3c6IDAgMnB4IDJweCAwIHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBsZWZ0OiB2YXIoLS14KTtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHBhZGRpbmc6IDRweCA4cHg7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4ycyBlYXNlLCB0cmFuc2Zvcm0gMC4ycyBlYXNlO1xuICAgIHRvcDogdmFyKC0teSk7XG4gICAgd2lsbC1jaGFuZ2U6IG9wYWNpdHk7XG4gICAgd2lkdGg6IG1heC1jb250ZW50O1xuICAgIHotaW5kZXg6IDE7XG59XG5cbi5zaW1wbGUtZG9udXQtY2hhcnQtd2lkZ2V0IC5kb251dGNoYXJ0LWxlZ2VuZCBsaSAuZG9udXRjaGFydC10b29sdGlwLnNob3ctdG9vbHRpcCB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTYwJSk7XG59XG5cbi5zaW1wbGUtZG9udXQtY2hhcnQtd2lkZ2V0IC5kb251dGNoYXJ0LWNoYXJ0IGxpIC5kb251dGNoYXJ0LXRvb2x0aXAgcCB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDRweCA4cHg7XG59XG5cbi5zaW1wbGUtZG9udXQtY2hhcnQtd2lkZ2V0IC5kb251dGNoYXJ0LW1ldGVyIHtcbiAgICBib3JkZXItdG9wOiBzb2xpZCAxcHggYmxhY2s7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5zaW1wbGUtZG9udXQtY2hhcnQtd2lkZ2V0IC5kb251dGNoYXJ0LW1ldGVyIC5pdGVtIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICBoZWlnaHQ6IDlweDtcbiAgICB3aWR0aDogMXB4O1xufVxuXG4uc2ltcGxlLWRvbnV0LWNoYXJ0LXdpZGdldCAuZG9udXRjaGFydC1pbmRpY2F0b3JzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uc2ltcGxlLWRvbnV0LWNoYXJ0LXdpZGdldCAuZG9udXRjaGFydC1pbmRpY2F0b3Ige1xuICAgIGZsZXg6IDE7XG59XG5cbi5zaW1wbGUtZG9udXQtY2hhcnQtd2lkZ2V0IC5kb251dGNoYXJ0LWluZGljYXRvcjpudGgtY2hpbGQoMikge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnNpbXBsZS1kb251dC1jaGFydC13aWRnZXQgLmRvbnV0Y2hhcnQtaW5kaWNhdG9yOmxhc3Qtb2YtdHlwZSB7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5zaW1wbGUtZG9udXQtY2hhcnQtd2lkZ2V0IC5kb251dGNoYXJ0LXRvb2x0aXAge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuQG1lZGlhIHByaW50IHtcbiAgICAuc2ltcGxlLWRvbnV0LWNoYXJ0LXdpZGdldCAuZG9udXQtcGVyY2VudGFnZSB7XG4gICAgICAgIGhlaWdodDogNzAlO1xuICAgICAgICB3aWR0aDogNzAlO1xuICAgIH1cblxuICAgIC5zaW1wbGUtZG9udXQtY2hhcnQtd2lkZ2V0IC5kb251dC1wZXJjZW50YWdlIHNwYW4ge1xuICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH1cblxuICAgIC5kb251dGNoYXJ0LWxlZ2VuZCBsaSAuZG9udXRjaGFydC10b29sdGlwIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG59XG4iXX0= */";
var stylesheet=".simple-donut-chart-widget {\n    align-items: center;\n    display: flex;\n    margin-bottom: 24px;\n    position: relative;\n}\n\n.simple-donut-chart-widget .chart-container {\n    position: relative;\n}\n\n.simple-donut-chart-widget .donut-percentage {\n    border-radius: 50%;\n    position: absolute;\n    pointer-events: none;\n    text-align: center;\n    top: 50%;\n    left: 50%;\n    height: 86%;\n    width: 86%;\n    transform-origin: 0 0;\n}\n\n.simple-donut-chart-widget .donut-percentage span {\n    display: inline-block;\n}\n\n.simple-donut-chart-widget .donut {\n    align-items: center;\n    display: flex;\n    flex: 1;\n    height: 100%;\n    justify-content: center;\n    margin-right: 16px;\n    width: 100%;\n}\n\n.simple-donut-chart-widget .donut-slice {\n    transition: stroke-width 0.2s ease;\n    cursor: pointer;\n}\n\n.simple-donut-chart-widget .simple-donut-chart-info {\n    position: relative;\n}\n\n.simple-donut-chart-widget .donutchart-total {\n    font-weight: 700;\n    line-height: 1;\n}\n\n.simple-donut-chart-widget .donutchart-legend {\n    margin-bottom: 30px;\n    padding: 0;\n    display: flex;\n    flex-direction: column;\n    width: max-content;\n}\n\n.simple-donut-chart-widget .donutchart-legend p:first-of-type {\n    flex: 1;\n}\n\n.simple-donut-chart-widget .donutchart-legend li {\n    align-items: center;\n    display: flex;\n    list-style: none;\n}\n\n.simple-donut-chart-widget .donutchart-legend li:hover {\n    cursor: pointer;\n}\n\n.simple-donut-chart-widget .donutchart-legend p {\n    margin: 0;\n}\n\n.simple-donut-chart-widget .donutchart-legend svg {\n    margin-right: 8px;\n}\n\n.simple-donut-chart-widget .donutchart-value {\n    padding-left: 16px;\n}\n\n.simple-donut-chart-widget .donutchart-chart {\n    align-self: center;\n    display: flex;\n    grid-template-columns: repeat(100, 1fr);\n    grid-auto-flow: column;\n    margin: 0;\n    padding: 0;\n}\n\n.simple-donut-chart-widget .donutchart-chart li {\n    list-style: none;\n    min-height: 20px;\n    position: relative;\n}\n\n.simple-donut-chart-widget .donutchart-chart.donutchart-chart--rounded li:first-of-type {\n    border-top-left-radius: 50px;\n    border-bottom-left-radius: 50px;\n}\n\n.simple-donut-chart-widget .donutchart-chart.donutchart-chart--rounded li:last-of-type {\n    border-top-right-radius: 50px;\n    border-bottom-right-radius: 50px;\n}\n\n.simple-donut-chart-widget .donutchart-chart li:hover {\n    cursor: pointer;\n}\n\n.simple-donut-chart-widget .donutchart-legend li .donutchart-tooltip {\n    background-color: white;\n    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.3);\n    border-radius: 4px;\n    display: flex;\n    left: var(--x);\n    opacity: 0;\n    padding: 4px 8px;\n    position: fixed;\n    pointer-events: none;\n    transition: opacity 0.2s ease, transform 0.2s ease;\n    top: var(--y);\n    will-change: opacity;\n    width: max-content;\n    z-index: 1;\n}\n\n.simple-donut-chart-widget .donutchart-legend li .donutchart-tooltip.show-tooltip {\n    opacity: 1;\n    transform: translateY(-60%);\n}\n\n.simple-donut-chart-widget .donutchart-chart li .donutchart-tooltip p {\n    margin: 0;\n    padding: 4px 8px;\n}\n\n.simple-donut-chart-widget .donutchart-meter {\n    border-top: solid 1px black;\n    display: flex;\n    justify-content: space-between;\n}\n\n.simple-donut-chart-widget .donutchart-meter .item {\n    background-color: black;\n    height: 9px;\n    width: 1px;\n}\n\n.simple-donut-chart-widget .donutchart-indicators {\n    display: flex;\n}\n\n.simple-donut-chart-widget .donutchart-indicator {\n    flex: 1;\n}\n\n.simple-donut-chart-widget .donutchart-indicator:nth-child(2) {\n    text-align: center;\n}\n\n.simple-donut-chart-widget .donutchart-indicator:last-of-type {\n    text-align: right;\n}\n\n.simple-donut-chart-widget .donutchart-tooltip {\n    position: absolute;\n}\n\n@media print {\n    .simple-donut-chart-widget .donut-percentage {\n        height: 70%;\n        width: 70%;\n    }\n\n    .simple-donut-chart-widget .donut-percentage span {\n        font-size: 10px;\n        font-weight: bold;\n    }\n\n    .donutchart-legend li .donutchart-tooltip {\n        display: none;\n    }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlNpbXBsZURvbnV0Q2hhcnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixTQUFTO0lBQ1QsV0FBVztJQUNYLFVBQVU7SUFDVixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLE9BQU87SUFDUCxZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxrQ0FBa0M7SUFDbEMsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLFVBQVU7SUFDVixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLE9BQU87QUFDWDs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsdUNBQXVDO0lBQ3ZDLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1QsVUFBVTtBQUNkOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSw0QkFBNEI7SUFDNUIsK0JBQStCO0FBQ25DOztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsMENBQTBDO0lBQzFDLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsY0FBYztJQUNkLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLG9CQUFvQjtJQUNwQixrREFBa0Q7SUFDbEQsYUFBYTtJQUNiLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksVUFBVTtJQUNWLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSwyQkFBMkI7SUFDM0IsYUFBYTtJQUNiLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixXQUFXO0lBQ1gsVUFBVTtBQUNkOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLE9BQU87QUFDWDs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJO1FBQ0ksV0FBVztRQUNYLFVBQVU7SUFDZDs7SUFFQTtRQUNJLGVBQWU7UUFDZixpQkFBaUI7SUFDckI7O0lBRUE7UUFDSSxhQUFhO0lBQ2pCO0FBQ0oiLCJmaWxlIjoiU2ltcGxlRG9udXRDaGFydC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2ltcGxlLWRvbnV0LWNoYXJ0LXdpZGdldCB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uc2ltcGxlLWRvbnV0LWNoYXJ0LXdpZGdldCAuY2hhcnQtY29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5zaW1wbGUtZG9udXQtY2hhcnQtd2lkZ2V0IC5kb251dC1wZXJjZW50YWdlIHtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgaGVpZ2h0OiA4NiU7XG4gICAgd2lkdGg6IDg2JTtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiAwIDA7XG59XG5cbi5zaW1wbGUtZG9udXQtY2hhcnQtd2lkZ2V0IC5kb251dC1wZXJjZW50YWdlIHNwYW4ge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLnNpbXBsZS1kb251dC1jaGFydC13aWRnZXQgLmRvbnV0IHtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleDogMTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4uc2ltcGxlLWRvbnV0LWNoYXJ0LXdpZGdldCAuZG9udXQtc2xpY2Uge1xuICAgIHRyYW5zaXRpb246IHN0cm9rZS13aWR0aCAwLjJzIGVhc2U7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uc2ltcGxlLWRvbnV0LWNoYXJ0LXdpZGdldCAuc2ltcGxlLWRvbnV0LWNoYXJ0LWluZm8ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnNpbXBsZS1kb251dC1jaGFydC13aWRnZXQgLmRvbnV0Y2hhcnQtdG90YWwge1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgbGluZS1oZWlnaHQ6IDE7XG59XG5cbi5zaW1wbGUtZG9udXQtY2hhcnQtd2lkZ2V0IC5kb251dGNoYXJ0LWxlZ2VuZCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XG59XG5cbi5zaW1wbGUtZG9udXQtY2hhcnQtd2lkZ2V0IC5kb251dGNoYXJ0LWxlZ2VuZCBwOmZpcnN0LW9mLXR5cGUge1xuICAgIGZsZXg6IDE7XG59XG5cbi5zaW1wbGUtZG9udXQtY2hhcnQtd2lkZ2V0IC5kb251dGNoYXJ0LWxlZ2VuZCBsaSB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cbi5zaW1wbGUtZG9udXQtY2hhcnQtd2lkZ2V0IC5kb251dGNoYXJ0LWxlZ2VuZCBsaTpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uc2ltcGxlLWRvbnV0LWNoYXJ0LXdpZGdldCAuZG9udXRjaGFydC1sZWdlbmQgcCB7XG4gICAgbWFyZ2luOiAwO1xufVxuXG4uc2ltcGxlLWRvbnV0LWNoYXJ0LXdpZGdldCAuZG9udXRjaGFydC1sZWdlbmQgc3ZnIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDhweDtcbn1cblxuLnNpbXBsZS1kb251dC1jaGFydC13aWRnZXQgLmRvbnV0Y2hhcnQtdmFsdWUge1xuICAgIHBhZGRpbmctbGVmdDogMTZweDtcbn1cblxuLnNpbXBsZS1kb251dC1jaGFydC13aWRnZXQgLmRvbnV0Y2hhcnQtY2hhcnQge1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwMCwgMWZyKTtcbiAgICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xufVxuXG4uc2ltcGxlLWRvbnV0LWNoYXJ0LXdpZGdldCAuZG9udXRjaGFydC1jaGFydCBsaSB7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICBtaW4taGVpZ2h0OiAyMHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnNpbXBsZS1kb251dC1jaGFydC13aWRnZXQgLmRvbnV0Y2hhcnQtY2hhcnQuZG9udXRjaGFydC1jaGFydC0tcm91bmRlZCBsaTpmaXJzdC1vZi10eXBlIHtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1MHB4O1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDUwcHg7XG59XG5cbi5zaW1wbGUtZG9udXQtY2hhcnQtd2lkZ2V0IC5kb251dGNoYXJ0LWNoYXJ0LmRvbnV0Y2hhcnQtY2hhcnQtLXJvdW5kZWQgbGk6bGFzdC1vZi10eXBlIHtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNTBweDtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNTBweDtcbn1cblxuLnNpbXBsZS1kb251dC1jaGFydC13aWRnZXQgLmRvbnV0Y2hhcnQtY2hhcnQgbGk6aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnNpbXBsZS1kb251dC1jaGFydC13aWRnZXQgLmRvbnV0Y2hhcnQtbGVnZW5kIGxpIC5kb251dGNoYXJ0LXRvb2x0aXAge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJveC1zaGFkb3c6IDAgMnB4IDJweCAwIHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBsZWZ0OiB2YXIoLS14KTtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHBhZGRpbmc6IDRweCA4cHg7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4ycyBlYXNlLCB0cmFuc2Zvcm0gMC4ycyBlYXNlO1xuICAgIHRvcDogdmFyKC0teSk7XG4gICAgd2lsbC1jaGFuZ2U6IG9wYWNpdHk7XG4gICAgd2lkdGg6IG1heC1jb250ZW50O1xuICAgIHotaW5kZXg6IDE7XG59XG5cbi5zaW1wbGUtZG9udXQtY2hhcnQtd2lkZ2V0IC5kb251dGNoYXJ0LWxlZ2VuZCBsaSAuZG9udXRjaGFydC10b29sdGlwLnNob3ctdG9vbHRpcCB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTYwJSk7XG59XG5cbi5zaW1wbGUtZG9udXQtY2hhcnQtd2lkZ2V0IC5kb251dGNoYXJ0LWNoYXJ0IGxpIC5kb251dGNoYXJ0LXRvb2x0aXAgcCB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDRweCA4cHg7XG59XG5cbi5zaW1wbGUtZG9udXQtY2hhcnQtd2lkZ2V0IC5kb251dGNoYXJ0LW1ldGVyIHtcbiAgICBib3JkZXItdG9wOiBzb2xpZCAxcHggYmxhY2s7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5zaW1wbGUtZG9udXQtY2hhcnQtd2lkZ2V0IC5kb251dGNoYXJ0LW1ldGVyIC5pdGVtIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICBoZWlnaHQ6IDlweDtcbiAgICB3aWR0aDogMXB4O1xufVxuXG4uc2ltcGxlLWRvbnV0LWNoYXJ0LXdpZGdldCAuZG9udXRjaGFydC1pbmRpY2F0b3JzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uc2ltcGxlLWRvbnV0LWNoYXJ0LXdpZGdldCAuZG9udXRjaGFydC1pbmRpY2F0b3Ige1xuICAgIGZsZXg6IDE7XG59XG5cbi5zaW1wbGUtZG9udXQtY2hhcnQtd2lkZ2V0IC5kb251dGNoYXJ0LWluZGljYXRvcjpudGgtY2hpbGQoMikge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnNpbXBsZS1kb251dC1jaGFydC13aWRnZXQgLmRvbnV0Y2hhcnQtaW5kaWNhdG9yOmxhc3Qtb2YtdHlwZSB7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5zaW1wbGUtZG9udXQtY2hhcnQtd2lkZ2V0IC5kb251dGNoYXJ0LXRvb2x0aXAge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuQG1lZGlhIHByaW50IHtcbiAgICAuc2ltcGxlLWRvbnV0LWNoYXJ0LXdpZGdldCAuZG9udXQtcGVyY2VudGFnZSB7XG4gICAgICAgIGhlaWdodDogNzAlO1xuICAgICAgICB3aWR0aDogNzAlO1xuICAgIH1cblxuICAgIC5zaW1wbGUtZG9udXQtY2hhcnQtd2lkZ2V0IC5kb251dC1wZXJjZW50YWdlIHNwYW4ge1xuICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH1cblxuICAgIC5kb251dGNoYXJ0LWxlZ2VuZCBsaSAuZG9udXRjaGFydC10b29sdGlwIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG59XG4iXX0= */";
styleInject(css_248z);

var SimpleDonutChart = /*#__PURE__*/Object.freeze({
	__proto__: null,
	'default': css_248z,
	stylesheet: stylesheet
});

var require$$0 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(SimpleDonutChart);

function preview() {
  return react.createElement("div", null, "preview");
}
function getPreviewCss() {
  return require$$0;
}

exports.getPreviewCss = getPreviewCss;
exports.preview = preview;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2ltcGxlRG9udXRDaGFydC5lZGl0b3JQcmV2aWV3LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtaW5qZWN0L2Rpc3Qvc3R5bGUtaW5qZWN0LmVzLmpzIiwiLi4vLi4vLi4vc3JjL1NpbXBsZURvbnV0Q2hhcnQuZWRpdG9yUHJldmlldy5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gc3R5bGVJbmplY3QoY3NzLCByZWYpIHtcbiAgaWYgKCByZWYgPT09IHZvaWQgMCApIHJlZiA9IHt9O1xuICB2YXIgaW5zZXJ0QXQgPSByZWYuaW5zZXJ0QXQ7XG5cbiAgaWYgKCFjc3MgfHwgdHlwZW9mIGRvY3VtZW50ID09PSAndW5kZWZpbmVkJykgeyByZXR1cm47IH1cblxuICB2YXIgaGVhZCA9IGRvY3VtZW50LmhlYWQgfHwgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXTtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgc3R5bGUudHlwZSA9ICd0ZXh0L2Nzcyc7XG5cbiAgaWYgKGluc2VydEF0ID09PSAndG9wJykge1xuICAgIGlmIChoZWFkLmZpcnN0Q2hpbGQpIHtcbiAgICAgIGhlYWQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBoZWFkLmZpcnN0Q2hpbGQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBoZWFkLmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgaGVhZC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBzdHlsZUluamVjdDtcbiIsImltcG9ydCB7IGNyZWF0ZUVsZW1lbnQgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHByZXZpZXcoKSB7XG4gICAgcmV0dXJuIDxkaXY+cHJldmlldzwvZGl2Pjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFByZXZpZXdDc3MoKSB7XG4gICAgcmV0dXJuIHJlcXVpcmUoXCIuL3VpL1NpbXBsZURvbnV0Q2hhcnQuY3NzXCIpO1xufVxuIl0sIm5hbWVzIjpbInN0eWxlSW5qZWN0IiwiY3NzIiwicmVmIiwiaW5zZXJ0QXQiLCJkb2N1bWVudCIsImhlYWQiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsInN0eWxlIiwiY3JlYXRlRWxlbWVudCIsInR5cGUiLCJmaXJzdENoaWxkIiwiaW5zZXJ0QmVmb3JlIiwiYXBwZW5kQ2hpbGQiLCJzdHlsZVNoZWV0IiwiY3NzVGV4dCIsImNyZWF0ZVRleHROb2RlIiwicHJldmlldyIsImdldFByZXZpZXdDc3MiLCJyZXF1aXJlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsU0FBU0EsV0FBVCxDQUFxQkMsR0FBckIsRUFBMEJDLEdBQTFCLEVBQStCO0FBQzdCLE1BQUtBLEdBQUcsS0FBSyxLQUFLLENBQWxCLEVBQXNCQSxHQUFHLEdBQUcsRUFBTjtBQUN0QixNQUFJQyxRQUFRLEdBQUdELEdBQUcsQ0FBQ0MsUUFBbkI7O0FBRUEsTUFBSSxDQUFDRixHQUFELElBQVEsT0FBT0csUUFBUCxLQUFvQixXQUFoQyxFQUE2QztBQUFFO0FBQVM7O0FBRXhELE1BQUlDLElBQUksR0FBR0QsUUFBUSxDQUFDQyxJQUFULElBQWlCRCxRQUFRLENBQUNFLG9CQUFULENBQThCLE1BQTlCLEVBQXNDLENBQXRDLENBQTVCO0FBQ0EsTUFBSUMsS0FBSyxHQUFHSCxRQUFRLENBQUNJLGFBQVQsQ0FBdUIsT0FBdkIsQ0FBWjtBQUNBRCxFQUFBQSxLQUFLLENBQUNFLElBQU4sR0FBYSxVQUFiOztBQUVBLE1BQUlOLFFBQVEsS0FBSyxLQUFqQixFQUF3QjtBQUN0QixRQUFJRSxJQUFJLENBQUNLLFVBQVQsRUFBcUI7QUFDbkJMLE1BQUFBLElBQUksQ0FBQ00sWUFBTCxDQUFrQkosS0FBbEIsRUFBeUJGLElBQUksQ0FBQ0ssVUFBOUI7QUFDRCxLQUZELE1BRU87QUFDTEwsTUFBQUEsSUFBSSxDQUFDTyxXQUFMLENBQWlCTCxLQUFqQjtBQUNEO0FBQ0YsR0FORCxNQU1PO0FBQ0xGLElBQUFBLElBQUksQ0FBQ08sV0FBTCxDQUFpQkwsS0FBakI7QUFDRDs7QUFFRCxNQUFJQSxLQUFLLENBQUNNLFVBQVYsRUFBc0I7QUFDcEJOLElBQUFBLEtBQUssQ0FBQ00sVUFBTixDQUFpQkMsT0FBakIsR0FBMkJiLEdBQTNCO0FBQ0QsR0FGRCxNQUVPO0FBQ0xNLElBQUFBLEtBQUssQ0FBQ0ssV0FBTixDQUFrQlIsUUFBUSxDQUFDVyxjQUFULENBQXdCZCxHQUF4QixDQUFsQjtBQUNEO0FBQ0Y7Ozs7Ozs7Ozs7Ozs7O0FDdkJNLFNBQVNlLE9BQVQsR0FBbUI7QUFDdEIsU0FBT1IsMkNBQVA7QUFDSDtBQUVNLFNBQVNTLGFBQVQsR0FBeUI7QUFDNUIsU0FBT0MsVUFBUDtBQUNIOzs7OzsifQ==
