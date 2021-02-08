module.exports = {
  // someSidebar: {
  //   Docusaurus: ['doc1', 'doc2', 'doc3'],
  //   Features: ['mdx'],
  // },
  docs:[
    {
      type: 'doc',
      id: 'doc1'
    },
    {
      type: 'category',
      label: "AIOps",
      items:[
        'aiops/doc2',
      ]
    },
    {
      type: 'category',
      label: "计算机视觉",
      items:[
        'cv/doc3',
      ]
    }
  ]
};
