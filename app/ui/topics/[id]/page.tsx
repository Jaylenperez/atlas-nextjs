import React from "react";

interface TopicPageProps {
  params: {
    id: string;
  };
}

export default async function Page({ params }: TopicPageProps) {
  return <div>Topics Page: {params.id}</div>;
}
