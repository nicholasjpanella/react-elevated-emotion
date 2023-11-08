---
layout:
  title:
    visible: true
  description:
    visible: false
  tableOfContents:
    visible: true
  outline:
    visible: true
  pagination:
    visible: false
---

# Your first component

The below will illustrate how to create a basic Styled Component with one prop.

<pre class="language-typescript"><code class="lang-typescript">import styled from "react-elevated-emotion";

type SectionComponentProps = {
    customTitle?: string;
};

<strong>const SectionComponent = styled.div&#x3C;SectionComponentProps>({
</strong>    ignore: ["customTitle"],
    testid: "my-component",
    defaultProps({ customTitle, children }) {
        return {
            children: props.customTitle
                ? (&#x3C;>
                    &#x3C;h1>{customTitle}&#x3C;/h1>
                    {children}
                  &#x3C;>)
                : children
        }
    }
})({
   label: "my-comp",
   padding: "10px 15px"
});
</code></pre>

With the above styled component you can implement it in your react app

<pre class="language-typescript"><code class="lang-typescript"><strong>import { createRoot } from "react-dom/client";
</strong><strong>const root = createRoot(document.getElementById("root"));
</strong><strong>
</strong><strong>function App() {
</strong>    return (
        &#x3C;SectionComponent customTitle="My App">
            Custom Content
        &#x3C;/SectionComponent>
    );
}
<strong>
</strong><strong>root.render(&#x3C;App />);
</strong></code></pre>

