import React from 'react';

function Loader() {
   return (
      <div data-testid="loader-overlay" className="loader-animation">
         <div className="loader" data-testid="loader-indicator"></div>
      </div>
   );
}

export default Loader;
