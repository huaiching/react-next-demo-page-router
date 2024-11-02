export const getRoutes = () => {
    const routes = [
        {
            key: "home",
            path: "/",
            name: "首頁",
        },
        {
            key: "nb-menu-1",
            path: "",
            name: "契約",
            children: [
                {
                    key: "nb-menu-1-1",
                    path: "",
                    name: "維護作業",
                    children: [
                        {
                            key: "nb001m",
                            path: "/nb/nb001m",
                            access: "NB",
                            name: "客戶資料維護作業"
                        }
                    ]
    
                }
            ]
        },
        {
            key: "pos-menu-1",
            path: "",
            name: "保服",
            children: [
                {
                    key: "pos-menu-1-1",
                    path: "",
                    name: "契約變更",
                    children: [
                        {
                            key: "psg01m",
                            path: "/pos/psg01m",
                            access: "PS",
                            name: "LIFE契變系統"
                        },
                        {
                            key: "psg32m",
                            path: "/pos/psg32m",
                            access: "PS",
                            name: "VA契變系統"
                        }
                    ]
    
                }
            ]
        }
    ]
    return routes
}

