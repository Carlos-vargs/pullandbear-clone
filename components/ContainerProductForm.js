import { useDisclosure, } from "@chakra-ui/react";
import CategoryForm from "@components/CategoryForm";
import ProductForm from "@components/ProductForm";
import { useState, useEffect } from "react";
import axios from 'axios';

function ContainerProductForm() {

    const productsUrl = `${process.env.API_URL}/products`

    const categoryUrl = `${process.env.API_URL}/products/categories`

    const { isOpen, onOpen, onClose } = useDisclosure()

    const [loading, setLoading] = useState(false)

    const [categoryList, setCategoryList] = useState([])

    const [productForm, setProductForm] = useState({
        title: "",
        size: "",
        price: "",
        gender: "",
        mark: "",
        category_id: "",
        image: [],
    })

    const [categoryForm, setCategoryForm] = useState({ name: "" })


    const handleSubmitProductForm = async e => {

        e.preventDefault()

        const formData = new FormData(e.target)

        try {

            let config = {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'multipart/form-data'
                },
            }

            setLoading(true)

            const response = await axios.post(productsUrl, formData, config)

            if (response.status === 201) {

                setLoading(false)

                setProductForm({
                    title: "",
                    size: "",
                    price: "",
                    gender: "",
                    mark: "",
                    category_id: "",
                    image: [],
                })
            }

        } catch (error) {

            setLoading(false)

            console.error(error)

        }

    }

    const handleChangeProductForm = e => {

        const { name, value, files } = e.target

        setProductForm({ ...productForm, [name]: value })

        if (name === 'image') {
            setProductForm({ ...productForm, image: [...files] })
        }

    }

    function handleChangeCategoryForm(e) {

        const { name, value } = e.target

        setCategoryForm({ ...categoryForm, [name]: value })

    }

    const handleSubmitCategoryForm = async e => {

        e.preventDefault()

        const form = new FormData(e.target)

        try {

            setLoading(true)

            const response = await axios.post(categoryUrl, form)

            const { data: { data: newCategory } } = response

            if (response.status === 201) {
                setCategoryList([...categoryList, newCategory])
                setProductForm({ ...productForm, category_id: newCategory.id })
                setCategoryForm({ name: "" })
                setLoading(false)
                onClose()
            }

        } catch (error) {

            setLoading(false)
            console.error(error)
        }

    }

    useEffect(() => {

        const getCategories = async () => {
            try {
                const { data: { data: categories } } = await axios.get(categoryUrl)
    
                setCategoryList(categories)
    
            } catch (error) {
                console.error(error)
            }
        }

        getCategories()
        
    }, [categoryUrl])



    return (
        <>
            <ProductForm
                onSubmit={handleSubmitProductForm}
                formValues={productForm}
                onChange={handleChangeProductForm}
                categoryList={categoryList}
                onOpen={onOpen}
                loading={loading}
            />
            <CategoryForm
                isOpen={isOpen}
                onClose={onClose}
                onSubmit={handleSubmitCategoryForm}
                onChange={handleChangeCategoryForm}
                formValue={categoryForm}
                loading={loading}
            />
        </>
    );
}

export default ContainerProductForm;