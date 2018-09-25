Plugin/Preset Merging:

plugins :[
    './other',
    ['./plug', {thing:true,field1:true}]
],
overrides :[
    {
        plugins:[
            [./plug,{thing:false,field1: false}]
        ]
    }
]

the overrides config will merge on top of top level config.

Entire plugin array will not be replaced.

only comming plugin names with different config will be merged, one in overrides will replace the original config

plugins:[
    './other',
    [./plug,{thing:false,field1: false}]
    
]

merging is based on identity + name

plugins :[
    './plugin',
    './plugin'
]

and 

plugins: [
    ['./plug',{one:true}],
    ['./plug', {two:true}]
]

are errors

if 2 plugins are required with different instances give each one of them different name

plugins:[
    ['./plug',{one:true},'first-insstance'],
    ['./plug',{two:true},'second-insstance']
]