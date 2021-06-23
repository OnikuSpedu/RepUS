import React from "react";
import Skeleton from "react-loading-skeleton";
import { GlobeAltIcon, PhoneIcon, MailIcon } from "@heroicons/react/outline";
import { FaYoutube, FaTwitter, FaFacebook } from "react-icons/fa";

interface Channel {
  type: string;
  id: string;
}

interface ResultCardProps {
  office: string;
  name: string;
  party: string;
  photo?: string;
  address?: object[];
  urls?: string[];
  channels?: Channel[];
  emails?: string[];
  phones?: string[];
}

function ResultCard({
  office,
  name,
  party,
  photo,
  address,
  urls,
  channels,
  emails,
  phones,
}: ResultCardProps) {
  const channelRenderer = (type, id) => {
    switch (type) {
      case "Facebook":
        return (
          <a
            href={`https://www.facebook.com/${id}`}
            className="flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full hover:bg-gray-400"
          >
            <FaFacebook className="w-6 h-6 text-gray-700" />
          </a>
        );
      case "Twitter":
        return (
          <a
            href={`https://www.twitter.com/${id}`}
            className="flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full hover:bg-gray-400"
          >
            <FaTwitter className="w-6 h-6 text-gray-700" />
          </a>
        );
      case "YouTube":
        return (
          <a
            href={`https://www.youtube.com/user/${id}`}
            className="flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full hover:bg-gray-400"
          >
            <FaYoutube className="w-6 h-6 text-gray-700" />
          </a>
        );
      default:
        return null;
    }
  };

  return (
    <div
      className={`flex flex-col gap-6 sm:flex-row w-full max-w-3xl p-6 my-2 bg-white shadow-2xl rounded-xl border-l-8 ${
        party == "Democratic Party" && "border-blue-500"
      } ${party == "Republican Party" && "border-red-500"} ${
        party != "Republican Party" &&
        party != "Democratic Party" &&
        "border-gray-200"
      }`}
    >
      <div className="">
        <div className="w-48 h-48 overflow-hidden sm:w-44 sm:h-44">
          <img
            src={photo ? photo : "/person-placeholder.jpg"}
            alt="Picture of the official"
            className="fill-img"
          />
        </div>
      </div>
      <div className="flex flex-col flex-auto">
        <div className="text-lg uppercase">{office}</div>
        <div className="mt-4 text-3xl font-bold">{name}</div>
        <div className="mt-1 text-lg">{party}</div>
        <div className="flex flex-row flex-wrap gap-3 mt-6">
          {urls &&
            urls.map((url) => (
              <a
                href={url}
                className="flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full hover:bg-gray-400"
              >
                <GlobeAltIcon className="w-6 h-6 text-gray-700" />
              </a>
            ))}
          {emails &&
            emails.map((email) => (
              <a
                href={`mailto:${email}`}
                className="flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full hover:bg-gray-400"
              >
                <MailIcon className="w-6 h-6 text-gray-700" />
              </a>
            ))}
          {phones &&
            phones.map((phone) => (
              <a
                href={`tel:${phone}`}
                className="flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full hover:bg-gray-400"
              >
                <PhoneIcon className="w-6 h-6 text-gray-700" />
              </a>
            ))}
          {channels &&
            channels.map(({ type, id }) => (
              <React.Fragment>{channelRenderer(type, id)}</React.Fragment>
            ))}
        </div>
      </div>
    </div>
  );
}

function LoadingResultCard() {
  return (
    <div
      className={
        "flex flex-col w-full max-w-3xl p-6 my-2 bg-white shadow-2xl rounded-xl border-l-8 border-gray-200"
      }
    >
      <div className="text-lg uppercase">
        <Skeleton />
      </div>
      <div className="text-2xl font-bold">
        <Skeleton />
      </div>
      <div className="mt-4 text-lg">
        <Skeleton />
      </div>
    </div>
  );
}

export { ResultCard, LoadingResultCard };
