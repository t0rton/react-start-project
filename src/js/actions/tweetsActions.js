export function fetchTweets() {
    return {
        type: "FETCH_TWEETS_FULFILLED",
        payload: [
            {text: "tweet1"},{text: "tweet2"},
        ]
    }
}