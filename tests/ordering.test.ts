import { newMostMistakesFirstSorter } from '../src/ordering/prioritization/mostmistakes.js'
import { newRecentMistakesFirstSorter } from '../src/ordering/prioritization/recentmistakes.js'
import { CardStatus, newCardStatus } from '../src/cards/cardstatus.js'
import { newFlashCard } from '../src/cards/flashcard.js'
import test, { describe } from 'node:test'
import assert from 'node:assert/strict'

const createMostMistakesFirstSorter = newMostMistakesFirstSorter
const createRecentMistakesFirstSorter = newRecentMistakesFirstSorter

describe('Test prioritization', () => {
  const flashCard1 = newFlashCard('Question1', 'Answer1')
  const flashCard2 = newFlashCard('Question2', 'Answer2')
  const flashCard3 = newFlashCard('Question3', 'Answer3')
  const flashCard4 = newFlashCard('Question4', 'Answer4')
  const flashCard5 = newFlashCard('Question5', 'Answer5')
  const flashCard6 = newFlashCard('Question6', 'Answer6')
  const flashCard7 = newFlashCard('Question7', 'Answer7')
  const flashCard8 = newFlashCard('Question8', 'Answer8')

  const cardStatus1 = newCardStatus(flashCard1)
  const cardStatus2 = newCardStatus(flashCard2)
  const cardStatus3 = newCardStatus(flashCard3)
  const cardStatus4 = newCardStatus(flashCard4)
  const cardStatus5 = newCardStatus(flashCard5)
  const cardStatus6 = newCardStatus(flashCard6)
  const cardStatus7 = newCardStatus(flashCard7)
  const cardStatus8 = newCardStatus(flashCard8)

  cardStatus1.recordResult(false)
  cardStatus1.recordResult(false)
  cardStatus1.recordResult(false)
  cardStatus2.recordResult(true)
  cardStatus2.recordResult(true)
  cardStatus2.recordResult(false)
  cardStatus3.recordResult(true)
  cardStatus3.recordResult(false)
  cardStatus3.recordResult(true)
  cardStatus4.recordResult(true)
  cardStatus4.recordResult(false)
  cardStatus4.recordResult(false)
  cardStatus5.recordResult(false)
  cardStatus5.recordResult(true)
  cardStatus5.recordResult(true)
  cardStatus6.recordResult(false)
  cardStatus6.recordResult(true)
  cardStatus6.recordResult(false)
  cardStatus7.recordResult(false)
  cardStatus7.recordResult(false)
  cardStatus7.recordResult(true)
  cardStatus8.recordResult(true)
  cardStatus8.recordResult(true)
  cardStatus8.recordResult(true)

  const cards: CardStatus[] = [
    cardStatus1, cardStatus2, cardStatus3, cardStatus4,
    cardStatus5, cardStatus6, cardStatus7, cardStatus8
  ]

  test('Test newMostMistakesFirstSorter', () => {
    const cardsSorted: CardStatus[] = createMostMistakesFirstSorter().reorganize(cards)
    assert.deepStrictEqual(cardsSorted[0], cardStatus1)
    assert.deepStrictEqual(cardsSorted[1], cardStatus4)
    assert.deepStrictEqual(cardsSorted[2], cardStatus6)
    assert.deepStrictEqual(cardsSorted[3], cardStatus7)
    assert.deepStrictEqual(cardsSorted[4], cardStatus2)
    assert.deepStrictEqual(cardsSorted[5], cardStatus3)
    assert.deepStrictEqual(cardsSorted[6], cardStatus5)
    assert.deepStrictEqual(cardsSorted[7], cardStatus8)
  })

  test('Test newRecentMistakesFirstSorter', () => {
    const cardsSorted: CardStatus[] = createRecentMistakesFirstSorter().reorganize(cards)
    assert.deepStrictEqual(cardsSorted[0], cardStatus1)
    assert.deepStrictEqual(cardsSorted[1], cardStatus2)
    assert.deepStrictEqual(cardsSorted[2], cardStatus4)
    assert.deepStrictEqual(cardsSorted[3], cardStatus6)
    assert.deepStrictEqual(cardsSorted[4], cardStatus3)
    assert.deepStrictEqual(cardsSorted[5], cardStatus5)
    assert.deepStrictEqual(cardsSorted[6], cardStatus7)
    assert.deepStrictEqual(cardsSorted[7], cardStatus8)
  })
})
