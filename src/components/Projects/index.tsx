import { useEffect, useState } from 'react';
import { api } from '../../services/api';
import { Pagination } from './components/Pagination';
import { Project } from './components/Project';
import './index.scss';

interface repositoriesGithubProps {
  id: string;
  name: string;
  description: string;
  topics: string[];
  previewUrl: string;
  full_name: string;
  homepage: string;
}

export function Projects() {
  const [repositoriesGithub, setRepositoriesGithub] = useState<repositoriesGithubProps[]>([]);
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get<repositoriesGithubProps[]>('');
        const filteredRepositories = response.data.filter((repo) => repo.topics.includes('portifolio'));

        const repositoriesWithPreview = filteredRepositories.map((repo) => {
          const previewUrl = `https://raw.githubusercontent.com/${repo.full_name}/main/preview.png`;
          return {
            ...repo,
            previewUrl: previewUrl,
          };
        });
        setRepositoriesGithub(repositoriesWithPreview);
      } catch (error) {
        console.log({ error });
      }
    };
    fetchData();
  }, []);

  const recordsPerPage = 4;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = repositoriesGithub.slice(firstIndex, lastIndex);
  const nPage = Math.ceil(repositoriesGithub.length / recordsPerPage);
  const numbers = [...Array(nPage + 1).keys()].slice(1)

  function prePage() {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1)
    }
  }
  function changeCPage(id: number) {
    setCurrentPage(id)
  }
  function nextPage() {
    if (currentPage !== nPage) {
      setCurrentPage(currentPage + 1)
    }
  }

  return (
    <main className='projects' id='projects'>
      <div className="container-center">
        <h3>Projects</h3>
        {
          <Pagination prePage={prePage}
            nextPage={nextPage}
            numbers={numbers}
            currentPage={currentPage}
            changeCPage={changeCPage}
          />
        }
        <section>
          {
            records.map((repo) => {
              return (
                <Project
                  key={repo.id}
                  name={repo.name}
                  description={repo.description}
                  link={repo.homepage}
                  image={repo.previewUrl}
                  icon={repo.topics[1] !== undefined ? `https://img.shields.io/badge/-${repo.topics[1]}-05122A?style=flat&logo=${repo.topics[1]}` : ''}
                  icon2={repo.topics[2] !== undefined ? `https://img.shields.io/badge/-${repo.topics[2]}-05122A?style=flat&logo=${repo.topics[2]}` : ''}
                  icon3={repo.topics[3] !== undefined ? `https://img.shields.io/badge/-${repo.topics[3]}-05122A?style=flat&logo=${repo.topics[3]}` : ''}
                  icon4={repo.topics[4] !== undefined ? `https://img.shields.io/badge/-${repo.topics[4]}-05122A?style=flat&logo=${repo.topics[4]}` : ''}
                />
              )
            })
          }
        </section>
        {
          <Pagination prePage={prePage}
            nextPage={nextPage}
            numbers={numbers}
            currentPage={currentPage}
            changeCPage={changeCPage}
          />
        }
      </div>
    </main>
  )
}