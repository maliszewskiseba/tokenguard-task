import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { simulateFetch } from "../../API/GraphsApi";

import { graphFolderInterface } from "../../types/graphTypes";

import HeaderRow from "../../GenericComponents/HeaderRow/HeaderRow";
import Loader from "../../GenericComponents/Loader/Loader";
import SkeletonCard from "../../GenericComponents/SkeletonCard/SkeletonCard";
import Card from "../../GenericComponents/Card/Card";
import Container from "../../GenericComponents/Container/Container";

import FolderCard from "./components/FolderCard";

interface MainPageProps {}

const MainPage = ({}: MainPageProps) => {
  const [loading, setLoading] = useState(true);
  const [graphsFoldersData, setGraphsFoldersData] = useState<
    graphFolderInterface[] | unknown
  >([]);

  const router = useRouter();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const fetchedFolders: graphFolderInterface | unknown =
      await simulateFetch();

    setGraphsFoldersData(fetchedFolders);
    setLoading(false);
  };

  const pushToSelectedGraph = (id: number) => {
    router.push(`/graph/${id}`);
  };

  return (
    <div className="flex flex-col">
      <HeaderRow>Select graph</HeaderRow>

      {graphsFoldersData.length === 0 ? (
        <SkeletonCard />
      ) : (
        <Container classes="flex-wrap justify-center sm:justify-start">
          {graphsFoldersData.map((folder: graphFolderInterface) => (
            <Card key={folder.id}>
              <FolderCard
                id={folder.id}
                img_src={folder.img_src}
                name={folder.name}
                pushToSelectedGraph={pushToSelectedGraph}
              />
            </Card>
          ))}
        </Container>
      )}
      {loading && <Loader />}
    </div>
  );
};

export default MainPage;
