// /** @format */

// import { useEffect, useState } from 'react';
// import apiClient from '../service/api-client';
// import { AxiosRequestConfig, CanceledError } from 'axios';
// import { FetchDataResponse } from '../interfaces/interfaces';

// const useData = <T>(
// 	endpoint: string,
// 	requestConfig?: AxiosRequestConfig,
// 	deps?: any[]
// ) => {
// 	const [data, setdata] = useState<T[]>([]);
// 	const [error, setError] = useState('');
// 	const [isLoading, setLoading] = useState(false);
// 	useEffect(
// 		() => {
// 			const controller = new AbortController();
// 			setLoading(true);
// 			apiClient
// 				.get<FetchDataResponse<T>>(endpoint, {
// 					signal: controller.signal,
// 					...requestConfig,
// 				})
// 				.then((res) => {
// 					setdata(res.data.results);
// 					setLoading(false);
// 				})
// 				.catch((err) => {
// 					if (err instanceof CanceledError) return;
// 					setError(err.message);
// 					setLoading(false);
// 				});
// 			return () => controller.abort();
// 		},
// 		// we cannot spread a unk :D
// 		deps ? [...deps] : []
// 	);
// 	//  the correct way to make it is that, but because it is a objwe will have uncontrolled reloads at this stage in the projetct:  [endpoint, requestConfig]);

// 	return { data, error, isLoading };
// };

// export default useData;

