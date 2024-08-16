
export const ROLE_TABLE_COLUMNS = [
    {
        title: '角色名称',
        dataIndex: 'name',
        ellipsis:true,
        fixed:'left',
        sorter: (a,b)=> {
            return a.name.localeCompare(b.name)
        },
    }

]