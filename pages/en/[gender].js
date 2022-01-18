import Layout from '@components/Layout';
import ShopInCard from '@components/ShopInCard';
import woman from "@images/pullandbear-womanbg.webp";
import man from "@images/pullandbear-manbg.webp";
import { useRouter } from 'next/router';


function Gender() {

    const router = useRouter()
    const { gender } = router.query

    return (
        <Layout>
            {
                gender === 'man'
                    ? <ShopInCard image={man.src} bgPosition={['left top', 'left top', 'top', 'top', 'top']} />
                    : <ShopInCard image={woman.src} bgPosition={['right top', 'right top', 'top', 'top', 'top']} />
            }
        </Layout>
    );
}

export default Gender;