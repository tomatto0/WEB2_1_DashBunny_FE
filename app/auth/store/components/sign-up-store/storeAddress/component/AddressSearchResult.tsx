import { JusoApiResponse } from '../model/addressResponse';
import styles from '../../sign-up-store.module.scss';
import { Address } from '../index';

interface AddressSearchResultsProps {
  searchTerm: string;
  data?: JusoApiResponse;
  isLoading: boolean;
  isError: boolean;
  onClick: (_address: Address) => void;
}

export default function AddressSearchResults({
  searchTerm,
  data,
  isLoading,
  isError,
  onClick,
}: AddressSearchResultsProps) {
  if (!searchTerm) return null;
  if (data?.results.juso === null) return null;
  if (isLoading) return null;
  if (isError) {
    return <div>에러가 발생했습니다</div>;
  }
  return (
    <div className={styles.search_result_wrap}>
      {data?.results.juso.map((item) => (
        <div
          onClick={() =>
            onClick({
              roadAddress: item.roadAddr,
              jibunAddress: item.jibunAddr,
            })
          }
          key={item.roadAddr}
          className={styles.content}
        >
          {item.roadAddr}
        </div>
      ))}
    </div>
  );
}
