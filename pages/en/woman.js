import Layout from '@components/Layout';
import ShopInCard from '@components/ShopInCard';
import woman from "@images/pullandbear-womanbg.webp";


function Woman() {
    return (
        <Layout>
            <ShopInCard image={woman.src} bgPosition={['right top', 'right top', 'top', 'top', 'top']} />
        </Layout>
    );
}

export default Woman;