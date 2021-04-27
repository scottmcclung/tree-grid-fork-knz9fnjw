import "@lwc/synthetic-shadow";
import "@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.min.css";
import BasicApp from "./basic";
import ExpandedApp from "./expanded";
import LazyLoadingApp from "./lazyLoading";


// A tree grid displays structured data in a table with expandable rows.
export const Basic = () => BasicApp;
Basic.storyName = "Basic Tree Grid";

// Expanded row names can be retrieved using JavaScript.
export const Expanded = () => ExpandedApp;
Expanded.storyName = "Tree Grid With Expanded Rows";

// For improved performance, a tree grid can load content only when the rows expand.
export const LazyLoading = () => LazyLoadingApp;
LazyLoading.storyName = "Asynchronous Loading of Nested Items";
