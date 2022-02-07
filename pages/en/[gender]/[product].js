import ProductCard from "@components/ProductCard";
import Layout from "@components/Layout";
import { Flex } from "@chakra-ui/react";

function Products({ productList }) {
    return (
        <Layout>
            <Flex py="130px" justifyContent="center" alignItems="center" wrap="wrap" gridRowGap="40px" gridColumnGap="20px" >
                {
                    productList.length !== 0
                        ? productList.map(e => <ProductCard key={e.id} data={e} />)
                        : <Flex py="100px" fontSize="20px" >Empty Category</Flex>
                }
            </Flex>
        </Layout>
    );
}

export async function getServerSideProps(context) {

    const query = context.query

    let { gender, product: category } = query

    gender === 'woman'
        ? gender = 'female'
        : gender = 'male'

    const res = await fetch(`https://pullandbear-clone-api.herokuapp.com/api/products?gender=${gender}&filter=${category}`)
    const { data: productList } = await res.json()

    return { props: { productList } }

}

export default Products;