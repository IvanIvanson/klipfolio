import renderBlock from "./renderBlock.js";


const headerSucceed = function () {
    renderBlock(
      "header-col-succeed",
      `<h1>Succeed with data</h1><p>PowerMetrics is a lightweight BI tool that helps you explore and share the right insights at the right time.</p><button>Get PowerMetrics Free</button><span>Request a Demo</span>`
    );
}

export default headerSucceed;