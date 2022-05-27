/** @format */

import '../resource/stylesheet/news.css';

export default function News({ newsArticles }) {
	return (
		<>
			<div className="newsContainer">
				<h2>Latest News</h2>

				{newsArticles.length === 0 ? (
					<h4>Don't have any Latest news</h4>
				) : (
					newsArticles.map((news, i) => {
						if (i < 5)
							return (
								<div key={i}>
									{news.content.substring(0, 200) + '....'}
									<span>
										<a
											className="sourcelink"
											href={news.url}
										>
											Read More
										</a>
									</span>
								</div>
							);
					})
				)}
			</div>
		</>
	);
}
