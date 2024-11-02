// _app.jsx 網站的全局樣式，首頁會自動放入 Component 中
import { Layout } from 'antd';
import HeaderData from "@/pages/_header";
import Menu from "@/pages/_menu";

const { Header, Sider, Content } = Layout;

function MyApp({ Component, pageProps }) {
    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Header style={{ background: '#fff', color: '#000', position: 'relative', height: '90px' }}>
                <HeaderData />
            </Header>
            <Layout>
                <Sider 
                    width={200} 
                    style={{ background: '#ffffff', borderRight: '1px solid #e8e8e8' }}
                >
                    <Menu/>
                </Sider>
                <Layout style={{ padding: '0 24px 24px' }}>
                    <Content
                        style={{
                            padding: 24,
                            margin: 0,
                            minHeight: 280,
                            background: '#f6f6f6', // 背景为浅灰色
                            color: '#000'
                        }}
                    >
                        <Component {...pageProps} />
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    );
}

export default MyApp;
