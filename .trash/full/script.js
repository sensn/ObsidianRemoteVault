function App() {
  const { useState, useEffect, useRef } = React;
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [aspectRatio, setAspectRatio] = useState('wide');
  const mainContentRef = useRef(null);

  const onFullScreenChange = () => {
    if (document.fullscreenElement) {
      setIsFullscreen(true);
      setAspectRatio('fullscreen');
    } else {
      setIsFullscreen(false);
      setAspectRatio('wide');
    }
  };

  const onToggleFullscreen = () => {
    if (!document.fullscreenElement) {
      mainContentRef.current.
      requestFullscreen().
      catch(err => {
        console.error(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
      });
    } else {
      document.exitFullscreen();
    }
  };

  useEffect(() => {
    document.addEventListener('fullscreenchange', onFullScreenChange);

    return () => {
      document.removeEventListener('fullscreenchange', onFullScreenChange);
    };
  }, []);

  return /*#__PURE__*/(
    React.createElement("div", { ref: mainContentRef, class: "main-content" }, /*#__PURE__*/

    React.createElement("div", {
      class: `wrapper-iframe ${isFullscreen ? 'fullscreen' : 'wide'}` }, /*#__PURE__*/
    React.createElement("iframe", {
      role: "presentation",
      title: "Webinar entertainment",
      frameborder: "0",
      src: "https://www.tutorialrepublic.com" })), /*#__PURE__*/



    React.createElement("div", { class: "wrapper-buttons" }, /*#__PURE__*/
    React.createElement("button", {
      class: "btn-iframe-fullscreen",
      onClick: onToggleFullscreen },

    isFullscreen && /*#__PURE__*/
    React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", height: "24px", viewBox: "0 0 24 24", width: "24px", fill: "#000000" }, /*#__PURE__*/
    React.createElement("path", { d: "M0 0h24v24H0V0z", fill: "none" }), /*#__PURE__*/
    React.createElement("path", { d: "M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z" })),



    !isFullscreen && /*#__PURE__*/
    React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", height: "24px", viewBox: "0 0 24 24", width: "24px", fill: "#000000" }, /*#__PURE__*/
    React.createElement("path", { d: "M0 0h24v24H0V0z", fill: "none" }), /*#__PURE__*/
    React.createElement("path", { d: "M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z" }))))));







}

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.querySelector('#app'));