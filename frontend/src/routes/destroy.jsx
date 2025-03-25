import { redirect } from 'react-router-dom'
import { deleteData } from '../api'

export async function Action({params}) {
    await deleteData(params.id)
    return redirect('/')
}