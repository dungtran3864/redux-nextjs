"use client";
import React from 'react'
import type { RootState } from '@/lib/store';
import { useSelector, useDispatch } from 'react-redux'
import {decrementByAmount, incrementByAmount} from './counterSlice'
import styles from "./counter.module.css";

export function CounterByValue() {
    const count = useSelector((state: RootState) => state.counter.value)
    const dispatch = useDispatch()

    return (
        <div>
            <div className={styles.counter}>
                <span>{count}</span>
                <button
                    aria-label="Increment value"
                    onClick={() => dispatch(incrementByAmount(10))}
                >
                    Increment
                </button>
                <button
                    aria-label="Decrement value"
                    onClick={() => dispatch(decrementByAmount(10))}
                >
                    Decrement
                </button>
            </div>
        </div>
    )
}
