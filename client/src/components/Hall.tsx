import React from 'react'
import { HallConfigType, SeatBlockType, TicketType } from '../shared/types'
const SEAT_RATIO = 9 / 16

interface Props {
    config: HallConfigType
    handleSelect: (seat: string) => void
    selectedSeats: string[]
    soldSeats: TicketType[]
}

interface ComputedSeatsNumber extends SeatBlockType {
    firstRowInd: number
    lastRowInd: number
}

function Hall({ config, handleSelect, selectedSeats, soldSeats }: Props) {
    const {
        height: heightHall,
        width: widthHall,
        seatWidth,
        seatBlocks,
    } = config

    const aspectRatioHall = widthHall / heightHall
    const seatHeight = seatWidth / SEAT_RATIO
    const getRowHeight = (block: SeatBlockType) =>
        seatHeight + (block.height - seatHeight * block.rows) / block.rows

    const computedLeftSeatsCount = (
        currentBlock: ComputedSeatsNumber,
        currentRow: number
    ) => {
        return config.seatBlocks
            .filter((block) => {
                if (currentBlock.id === block.id) return false
                if (
                    currentBlock.x - block.x >= 0 &&
                    currentRow >= block.y &&
                    currentRow <= block.y + block.height + 4
                ) {
                    return true
                }
                return false
            })
            .reduce((seats, block) => seats + block.seats, 0)
    }

    const renderSeats = (block: ComputedSeatsNumber) => {
        const { rows, seats, firstRowInd, y } = block
        const rowHeight = getRowHeight(block)
        const result = []
        let currentRow = y
        for (let i = 0; i < rows; i++) {
            currentRow += rowHeight
            const seatInd = computedLeftSeatsCount(block, currentRow) + 1
            for (let j = 0; j < seats; j++) {
                const key = `${i + firstRowInd}-${j + seatInd}`
                const isSelect = selectedSeats.includes(key)
                const isSold = soldSeats.find(
                    (seat) => `${seat.row}-${seat.chair}` === key
                )
                const onSelect = () => handleSelect(key)
                result.push(
                    <div
                        key={key}
                        className={`seat  ${isSelect && 'selected'} ${
                            isSold && 'unavailable'
                        }`}
                        style={{ aspectRatio: SEAT_RATIO }}
                        onClick={onSelect}
                    >
                        {isSelect || (isSold && 'X')}
                    </div>
                )
            }
        }
        return result
    }

    const computedSeatsNumber = (blocks: SeatBlockType[]) => {
        return blocks
            .sort((a, b) => a.y - b.y)
            .reduce(
                (obj, next) => {
                    const current = { ...next } as ComputedSeatsNumber
                    const { prev } = obj
                    if (!prev) {
                        current.firstRowInd = 1
                        current.lastRowInd = current.rows
                        obj.prev = current
                        obj.result.push(current)
                        return obj
                    }

                    if (current.y > prev.y) {
                        if (prev.y + prev.height > current.y) {
                            const upper = Math.floor(
                                (current.y - prev.y) / getRowHeight(current) +
                                    prev.firstRowInd
                            )
                            current.firstRowInd = upper
                            current.lastRowInd =
                                current.firstRowInd + current.rows - 1
                        } else {
                            current.firstRowInd = prev.lastRowInd + 1
                            current.lastRowInd = prev.lastRowInd + current.rows
                        }
                    }
                    obj.prev =
                        current.y + current.height > prev.height + prev.y
                            ? current
                            : prev
                    obj.result.push(current)
                    return obj
                },
                {
                    result: [],
                    prev: null,
                } as {
                    result: ComputedSeatsNumber[]
                    prev: ComputedSeatsNumber | null
                }
            ).result
    }

    const renderBlockSeats = () => {
        return computedSeatsNumber(seatBlocks).map((block, ind) => {
            const { x, y, width, height, seats, rows } = block

            const style = {
                top: 100 / (heightHall / y) + '%',
                left: 100 / (widthHall / x) + '%',
                width: 100 / (widthHall / width) + '%',
                aspectRatio: width / height,
                columns: seats,
                rows: rows,
                gridTemplateColumns: `repeat(${seats}, ${
                    100 * (widthHall / width / (widthHall / seatWidth))
                }%)`,
            }
            return (
                <div
                    key={ind}
                    className='grid absolute justify-between'
                    style={style}
                >
                    {renderSeats(block)}
                </div>
            )
        })
    }

    return (
        <div className='relative aspect-[1] w-full lg:w-1/2'>
            {renderBlockSeats()}
        </div>
    )
    {
        /* <li className='flex my-1 items-center justify-center'>
                <span className='text-sm mx-1'>Ряд 1</span>
                <ul className='flex'>
                    <li className='seat'></li>
                    <li className='seat'></li>
                    <li className='seat'></li>
                    <li className='seat'></li>
                </ul>
                <span className='text-sm mx-1'>Ряд 1</span>
            </li>
            <li className='flex my-1 items-center justify-center'>
                <span className='text-sm mx-1'>Ряд 2</span>
                <ul className='flex'>
                    <li className='seat active'></li>
                    <li className='seat'></li>
                    <li className='seat'></li>
                    <li className='seat'></li>
                    <li className='seat not-active'></li>
                </ul>
                <span className='text-sm mx-1'>Ряд 2</span>
            </li>
            <li className='flex my-1 items-center justify-center'>
                <span className='text-sm mx-1'>Ряд 3</span>
                <ul className='flex'>
                    <li className='seat'></li>
                    <li className='seat'></li>
                    <li className='seat'></li>
                    <li className='seat'></li>
                    <li className='seat'></li>
                    <li className='seat'></li>
                </ul>
                <span className='text-sm mx-1'>Ряд 3</span>
            </li>
            <li className='flex my-1 items-center justify-center'>
                <span className='text-sm mx-1'>Ряд 4</span>
                <ul className='flex'>
                    <li className='seat'></li>
                    <li className='seat'></li>
                    <li className='seat'></li>
                    <li className='seat not-active'></li>
                    <li className='seat not-active'></li>
                    <li className='seat not-active'></li>
                    <li className='seat not-active'></li>
                    <li className='seat not-active'></li>
                    <li className='seat not-active'></li>
                    <li className='seat'></li>
                </ul>
                <span className='text-sm mx-1'>Ряд 4</span>
            </li>
            <li className='flex my-1 items-center justify-center'>
                <span className='text-sm mx-1'>Ряд 5</span>
                <ul className='flex'>
                    <li className='seat'></li>
                    <li className='seat'></li>
                    <li className='seat'></li>
                    <li className='seat'></li>
                    <li className='seat'></li>
                    <li className='seat'></li>
                </ul>
                <span className='text-sm mx-1'>Ряд 5</span>
            </li>
            <li className='flex my-1 items-center justify-center'>
                <span className='text-sm mx-1'>Ряд 6</span>
                <ul className='flex'>
                    <li className='seat'></li>
                    <li className='seat'></li>
                    <li className='seat'></li>
                    <li className='seat'></li>
                    <li className='seat'></li>
                    <li className='seat'></li>
                </ul>
                <span className='text-sm mx-1'>Ряд 6</span>
            </li>
            <li className='flex my-1 items-center justify-center'>
                <span className='text-sm mx-1'>Ряд 7</span>
                <ul className='flex'>
                    <li className='seat'></li>
                    <li className='seat'></li>
                    <li className='seat'></li>
                    <li className='seat'></li>
                    <li className='seat'></li>
                    <li className='seat'></li>
                </ul>
                <span className='text-sm mx-1'>Ряд 7</span>
            </li> */
    }
}

export { Hall }
