import React from 'react'
import { TypeCategory } from '../../types/category';

type CategoryManagerProps = {
    onRemoveCate: (id: any) => void
    category: TypeCategory[];  
}

const CategoryManager = (props: CategoryManagerProps) => {
  return (
    <div>CategoryManager</div>
  )
}

export default CategoryManager