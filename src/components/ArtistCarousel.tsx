"use client"

import { useRef, useEffect, useState } from "react"
import { gsap } from "gsap"
import { Draggable } from "gsap/Draggable"
import Modal from "react-modal"
import { usePanel } from "@/components/providers/PanelProvider"

// Register Draggable plugin
if (typeof window !== "undefined" && gsap && Draggable) {
  gsap.registerPlugin(Draggable)
}

const artists = [
  {
    name: "Jasmine Lee",
    bio: "Visual artist blending street and digital art. Oakland Creators Collective.",
    image: "/avatars/jasmine.jpg"
  },
  {
    name: "Carlos Rivera",
    bio: "Music producer and sound engineer. Mission District Studios.",
    image: "/avatars/carlos.jpg"
  },
  {
    name: "Maya Patel",
    bio: "Content creator and vlogger. BayVibe Media.",
    image: "/avatars/maya.jpg"
  },
  {
    name: "Andre Thompson",
    bio: "Event curator and community builder. SoMa Pop-Ups.",
    image: "/avatars/andre.jpg"
  },
  {
    name: "Sierra Nguyen",
    bio: "DJ, host, and radio personality. Vibe Sessions Radio.",
    image: "/avatars/sierra.jpg"
  },
  {
    name: "Lila Kim",
    bio: "Photographer and creative director. Golden Gate Creatives.",
    image: "/avatars/lila.jpg"
  },
  {
    name: "Devon Brooks",
    bio: "Indie filmmaker and documentarian. Bay Area Indie Films.",
    image: "/avatars/devon.jpg"
  },
  {
    name: "Tariq Johnson",
    bio: "Rapper, activist, and poet. East Bay Voices.",
    image: "/avatars/tariq.jpg"
  }
]

export function ArtistCarousel() {
  const trackRef = useRef<HTMLDivElement>(null)
  const [modalArtist, setModalArtist] = useState<null | typeof artists[0]>(null)
  const { openPanel } = usePanel()

  useEffect(() => {
    if (!trackRef.current) return
    let draggable: Draggable[] = []
    // Wait for DOM paint
    setTimeout(() => {
      draggable = Draggable.create(trackRef.current, {
        type: "x",
        edgeResistance: 0.85,
        inertia: true,
        bounds: trackRef.current.parentElement as Element,
        dragClickables: true,
        cursor: "grab"
      })
    }, 0)
    return () => {
      if (draggable && draggable[0]) draggable[0].kill()
    }
  }, [])

  const openArtistPanel = (artist: typeof artists[number]) => {
    openPanel({
      type: "artist",
      title: artist.name,
      subtitle: "Bay Area Creator",
      image: artist.image,
      description:
        artist.bio +
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse facilisis, nunc a cursus lacinia, orci urna bibendum massa, vitae malesuada eros nibh id magna.",
      meta: {
        Genre: "Hip-Hop / Visual / Mixed",
        City: "San Francisco / Oakland",
        Followers: 12400,
        Collaborations: 27,
      },
      ctaLabel: "Follow Artist",
    })
  }

  return (
    <section id="artists" className="py-20 bg-background">
      <div className="text-center mb-12 px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
          Meet the Artists
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Drag to explore the creative minds shaping Bay Area culture.
        </p>
      </div>
      <div className="overflow-x-hidden w-full relative">
        <div
          ref={trackRef}
          className="flex gap-8 cursor-grab select-none px-8"
          style={{ touchAction: "pan-x", willChange: "transform" }}
        >
          {artists.map((artist) => (
            <div
              key={artist.name}
              className="bg-muted rounded-xl shadow-lg flex-shrink-0 w-72 p-6 flex flex-col items-center justify-between hover:shadow-2xl transition-shadow duration-300"
              onClick={() => openArtistPanel(artist)}
            >
              <img
                src={artist.image}
                alt={artist.name}
                className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-primary"
              />
              <h3 className="text-2xl font-bold mb-2 text-foreground text-center">{artist.name}</h3>
              <p className="text-base text-muted-foreground mb-4 text-center">{artist.bio}</p>
              <button
                className="mt-auto px-6 py-2 rounded bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition"
                onClick={(e) => {
                  e.stopPropagation()
                  setModalArtist(artist)
                }}
              >
                View Profile
              </button>
            </div>
          ))}
        </div>
      </div>
      <Modal
        isOpen={!!modalArtist}
        onRequestClose={() => setModalArtist(null)}
        className="max-w-lg mx-auto my-20 bg-background rounded-xl shadow-2xl p-8 outline-none relative"
        overlayClassName="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
        ariaHideApp={false}
      >
        {modalArtist && (
          <div className="flex flex-col items-center">
            <img
              src={modalArtist.image}
              alt={modalArtist.name}
              className="w-28 h-28 rounded-full object-cover mb-4 border-4 border-primary"
            />
            <h3 className="text-3xl font-bold mb-2 text-foreground text-center">{modalArtist.name}</h3>
            <p className="text-base text-muted-foreground mb-4 text-center">{modalArtist.bio}</p>
            <div className="flex gap-4 mt-4">
              <button
                className="px-4 py-2 rounded bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition"
                onClick={() => setModalArtist(null)}
              >
                Close
              </button>
              <button
                className="px-4 py-2 rounded bg-accent text-accent-foreground font-semibold hover:bg-accent/80 transition"
                onClick={() => alert('Engage feature coming soon!')}
              >
                Engage
              </button>
            </div>
          </div>
        )}
      </Modal>
    </section>
  )
}
