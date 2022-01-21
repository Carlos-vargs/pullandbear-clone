import dynamic from 'next/dynamic';
import Layout from '@components/Layout';
import { useRouter } from 'next/router';
import man from "@images/pullandbear-manbg.webp";
import woman from "@images/pullandbear-womanbg.webp";
const ShopInCard = dynamic(() => import('@components/ShopInCard'))
const SaleBackground = dynamic(() => import('@components/SaleBackground'))
const FooterCategoryContainer = dynamic(() => import('@components/FooterCategoryContainer'));
const FooterNewsletterContainer = dynamic(() => import('@components/FooterNewsletterContainer'));

function Gender() {

    const router = useRouter()
    const { gender } = router.query

    const config = [
        {
            image: man.src,
            url: '/en/man/clothing',
            position: ['left top', 'left top', 'top', 'top', 'top']
        },
        {
            image: woman.src,
            url: '/en/woman/clothing',
            position: ['right top', 'right top', 'top', 'top', 'top']
        },

    ]

    return (
        <Layout theme='white' >
            <SaleBackground />
            {
                gender === 'man'
                    ? <ShopInCard config={config[0]} />
                    : <ShopInCard config={config[1]} />
            }
            <FooterNewsletterContainer />
            <FooterCategoryContainer />
        </Layout>
    );
}

export default Gender;