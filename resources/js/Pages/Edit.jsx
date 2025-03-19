import React from 'react'
import { Head, useForm } from '@inertiajs/react'
import { useRoute } from '../../../vendor/tightenco/ziggy/src/js';

function Edit({post}) {
    const route = useRoute();

    const { data, setData, put, errors, processing } = useForm({
        body: post.body,
    })

    function submit(e) {
        e.preventDefault();
        put(route('posts.update', post));
    }

    return (
        <>

            <Head title="Edit" />

            <h1 className='title'>Update your Post</h1>
            <div>
                <form onSubmit={submit} className='w-1/2 mx-auto'>
                    <textarea rows="10"
                        value={data.body}
                        onChange={(e) => setData("body", e.target.value)}
                        className={errors.body && "!ring-red-500"}
                    >
                    </textarea>
                    {errors.body && <div className='error'>{errors.body}</div>}
                    <button className='primary-btn mt-4'
                        disabled={processing}
                    >Update Post</button>
                </form>
            </div>
        </>
    )
}

export default Edit