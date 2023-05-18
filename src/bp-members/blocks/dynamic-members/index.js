!function(){"use strict";var e={n:function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,{a:r}),r},d:function(t,r){for(var n in r)e.o(r,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:r[n]})},o:function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}},t=window.wp.blocks,r=window.wp.element,n=window.wp.blockEditor,l=window.wp.components,o=window.wp.i18n,s=window.wp.serverSideRender,a=e.n(s),i=window.bp.blockData;const d=[{label:(0,o.__)("Newest","buddypress"),value:"newest"},{label:(0,o.__)("Active","buddypress"),value:"active"},{label:(0,o.__)("Popular","buddypress"),value:"popular"}];var u=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"bp/dynamic-members","title":"Dynamic Members List","category":"widgets","icon":"groups","description":"A dynamic list of recently active, popular, and newest members.","keywords":["BuddyPress","members","community"],"textdomain":"buddypress","attributes":{"title":{"type":"string","default":"Members"},"maxMembers":{"type":"number","default":5},"memberDefault":{"type":"string","default":"active"},"linkTitle":{"type":"boolean","default":false}},"supports":{"align":true},"editorScript":"file:index.js","style":"file:index.css"}');(0,t.registerBlockType)(u,{icon:{background:"#fff",foreground:"#d84800",src:"groups"},edit:e=>{let{attributes:t,setAttributes:s}=e;const u=(0,n.useBlockProps)(),{title:c,maxMembers:m,memberDefault:b,linkTitle:p}=t,w=(0,i.isActive)("friends")?d:d.filter((e=>"popular"!==e.value));return(0,r.createElement)("div",u,(0,r.createElement)(n.InspectorControls,null,(0,r.createElement)(l.PanelBody,{title:(0,o.__)("Settings","buddypress"),initialOpen:!0},(0,r.createElement)(l.TextControl,{label:(0,o.__)("Title","buddypress"),value:c,onChange:e=>{s({title:e})}}),(0,r.createElement)(l.RangeControl,{label:(0,o.__)("Max members to show","buddypress"),value:m,onChange:e=>s({maxMembers:e}),min:1,max:10,required:!0}),(0,r.createElement)(l.SelectControl,{label:(0,o.__)("Default members to show","buddypress"),value:b,options:w,onChange:e=>{s({memberDefault:e})}}),(0,r.createElement)(l.ToggleControl,{label:(0,o.__)("Link block title to Members directory","buddypress"),checked:!!p,onChange:()=>{s({linkTitle:!p})}}))),(0,r.createElement)(l.Disabled,null,(0,r.createElement)(a(),{block:"bp/dynamic-members",attributes:t})))}})}();