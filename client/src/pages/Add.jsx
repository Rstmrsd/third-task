import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDataContext } from "../Context/Context";






const Add = () => {
    const { postData } = useDataContext()
    const formik = useFormik({
        initialValues: {
            img: '',
            title: '',
            price: ''
        },
        validationSchema: Yup.object({
            img: Yup.string()
                .required('Required'),
            title: Yup.string()
                .required('Required'),
            price: Yup.string()
                .required('Required'),

        }),
        onSubmit: async (values) => {
          postData(values)
           formik.resetForm()
          },
    });
    return (
    <>
            <form onSubmit={formik.handleSubmit} style={{ marginTop: "200px" }}>
                <label htmlFor="img">img</label>
                <input id="img" type="text" {...formik.getFieldProps("img")} />
                {formik.touched.img && formik.errors.img ? (
                    <div>{formik.errors.img}</div>
                ) : null}

                <label htmlFor="title">title</label>
                <input id="title" type="text" {...formik.getFieldProps("title")} />
                {formik.touched.title && formik.errors.title ? (
                    <div>{formik.errors.title}</div>
                ) : null}

                <label htmlFor="price">Number</label>
                <input id="price" type="Number" {...formik.getFieldProps("price")} />
                {formik.touched.price && formik.errors.price ? (
                    <div>{formik.errors.price}</div>
                ) : null}






                <button type="submit">Submit</button>
                </form>
                
            </>
              );
            };


            export default Add
