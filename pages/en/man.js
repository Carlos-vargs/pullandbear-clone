import Layout from '@components/Layout';
import ShopInCard from '@components/ShopInCard';
import man from "@images/pullandbear-manbg.webp";


function Man() {
    return (
        <Layout>
            <ShopInCard image={man.src} bgPosition={['left top', 'left top', 'top', 'top', 'top']} />
        </Layout>
    );
}

export default Man;