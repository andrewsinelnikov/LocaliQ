import React, { useState } from 'react';

const CategoryProducts: React.FC = () => {
    const [viewMode, setViewMode] = useState<'list' | 'grid'>('list');

    const products = [
        { id: 1, name: 'Product 1' },
        { id: 2, name: 'Product 2' },
        { id: 3, name: 'Product 3' },
        // ... more products
    ];

    const toggleView = () => {
        setViewMode(prevMode => (prevMode === 'list' ? 'grid' : 'list'));
    };

    return (
        <div>
            <h1>Category Products</h1>
            <button onClick={toggleView}>
                Switch to {viewMode === 'list' ? 'Grid' : 'List'} View
            </button>
            <div className={viewMode === 'list' ? 'list-view' : 'grid-view'}>
                {products.map(product => (
                    <div key={product.id} className="product-item">
                        {product.name}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CategoryProducts;
