"use client";
import { useState } from "react";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "Are you sure, cutie?",
      "Pretty please?",
      "With extra cuddles?",
      "Maybe a hug instead?",
      "I promise sweet treats!",
      "Don't hurt my little heart!",
      "I need you, darling!",
      "My heart's all a flutter!",
      "You're my one and only!",
      "I can't imagine life without you!",
      "Saying no is too hard!",
      "You're too precious to refuse!",
      "Please, be mine forever!",
      "I'm all yours, right?",
      "No? Oh, my heart!",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="-mt-16 flex h-screen flex-col items-center justify-center px-4">
      {yesPressed ? (
        <>
          {/* Responsive video container */}
          <div className="w-full max-w-sm mx-auto">
            <iframe
              className="w-full h-[calc(100vh-100px)]"
              src="https://player.vimeo.com/video/1056461704?h=d078516d4b&amp;title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
              frameBorder="0"
              allowFullScreen
              title="My Love"
            ></iframe>
          </div>

          {/* "I love you pookie!!" below video */}
          <div className="mt-4 text-4xl font-bold text-center">
            WOOOOOO!!! I love you pookie!! ;))
          </div>
        </>
      ) : (
        <>
          <img
            className="h-[200px]"
            src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
            alt="Cute love bear with roses"
          />
          <h1 className="my-4 text-4xl">Will you be my Valentine?</h1>
          <div className="flex items-center">
            <button
              className="mr-4 rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700"
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>
            <button
              onClick={handleNoClick}
              className="rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
            >
              {noCount === 0 ? "No" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
