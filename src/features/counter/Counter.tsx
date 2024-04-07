"use client";
import React from 'react'
import type { RootState } from '@/lib/store';
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './counterSlice'
import { useRouter } from 'next/navigation'
import styles from "./counter.module.css";

export function Counter() {
    const count = useSelector((state: RootState) => state.counter.value)
    const dispatch = useDispatch()
    const router = useRouter()

    return (
        <div>
            <div className={styles.counter}>
                <span>{count}</span>
                <button
                    aria-label="Increment value"
                    onClick={() => dispatch(increment())}
                >
                    Increment
                </button>
                <button
                    aria-label="Decrement value"
                    onClick={() => dispatch(decrement())}
                >
                    Decrement
                </button>
                <button type="button" onClick={() => router.push('/countbyvalue')}>
                    Navigate to counter by value
                </button>
            </div>
        </div>
    )
}
