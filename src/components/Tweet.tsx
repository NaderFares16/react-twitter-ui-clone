import { ArrowsClockwise, ChatCircle, Heart } from 'phosphor-react';
import { Link } from 'react-router-dom'
import './Tweet.css';

interface TweetProps {
  content: string
  comments?: number
  likes?: number
  retweets?: number
}

export function Tweet(props: TweetProps) {
  return (
    <Link to='/status' className="tweet">
      <img src="https://github.com/NaderFares16.png" alt="Nader Fares" />

      <div className="tweet-content">
        <div className="tweet-content-header">
          <strong>Nader Fares</strong>
          <span>@naderfares</span>
        </div>

        <p>
          {props.content}
        </p>

        <div className="tweet-content-footer">
          <button type="button">
            <ChatCircle />
            {props.comments ?? 0}
          </button>
          <button type="button">
            <ArrowsClockwise />
            {props.retweets ?? 0}
          </button>
          <button type="button">
            <Heart />
            {props.likes ?? 0}
          </button>
        </div>
      </div>
    </Link>
  )
}