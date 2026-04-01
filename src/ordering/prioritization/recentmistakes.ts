import { CardStatus } from '../../cards/cardstatus.js'
import { CardOrganizer } from '../cardorganizer.js'

function newRecentMistakesFirstSorter(): CardOrganizer {
  return {
    /**
     * Orders the cards by the time of most recent incorrect answers provided for them.
     *
     * @param cards The {@link CardStatus} objects to order.
     * @return The ordered cards.
     */
    reorganize: function (cards: CardStatus[]): CardStatus[] {
      const answeredIncorrectlyLastRound: CardStatus[] = []
      const remainingCards: CardStatus[] = []

      for (const cardStatus of cards) {
        const results = cardStatus.getResults()
        const mostRecentResult = results[results.length - 1]

        if (mostRecentResult === false) {
          answeredIncorrectlyLastRound.push(cardStatus)
        } else {
          remainingCards.push(cardStatus)
        }
      }

      return answeredIncorrectlyLastRound.concat(remainingCards)
    }
  }
};

export { newRecentMistakesFirstSorter }
