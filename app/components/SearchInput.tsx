'use client';

import { useState, useEffect, ChangeEvent } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';

export default function SearchInput() {
    const router = useRouter();
    const searchParams = useSearchParams();

    const [searchTerm, setSearchTerm] = useState(
        searchParams.get('search') || ''
    );

    // Debounce
    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            const currentQuery = searchParams.get('search');
            if (searchTerm !== currentQuery) {
                const params = new URLSearchParams(searchParams.toString());
                if (searchTerm) {
                    params.set('search', searchTerm);
                } else {
                    params.delete('search');
                }
                router.push(`?${params.toString()}`);
            }
        }, 500);
        return () => clearTimeout(delayDebounceFn);
    }, [searchTerm, router, searchParams]);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    return (
        <form className="w-full px-5 md:px-0 md:max-w-xl md:place-self-end">
            <label htmlFor="model-search" className="sr-only">
            </label>
            <input className="rounded-full border w-full px-5 py-3 text-sm md:text-base bg-white"
                type="text"
                name="search"
                placeholder="Search for a model"
                id="model-search"
                autoComplete="off"
                value={searchTerm}
                onChange={handleChange}
            />
        </form>
        // <input
        //     type="text"
        //     placeholder="Живой поиск..."
        //     value={searchTerm}
        //     onChange={handleChange}
        // />
    );
}