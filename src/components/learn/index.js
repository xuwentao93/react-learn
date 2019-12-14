import React, {useState} from 'react'

export default function Learn() {
  let [isBlocking] = useState('hello world');
    return (
      <div className="learn">
        {isBlocking}
        {/* <span>🐭123</span> */}
      </div>
    )
}
