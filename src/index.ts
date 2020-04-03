import global from '@mmstudio/global';

export default function download_file(url: string) {
	return new Promise<string>((resolve, reject) => {
		if (!/^https?/.test(url)) {
			const host = global('host', 'http://127.0.0.1:8889');
			url = `${host}/fsweb/getfile?id=${url}`;
		}
		wx.downloadFile({
			url,
			success(res) {
				resolve(res.tempFilePath);
			},
			fail(res) {
				reject(res);
			}
		});
	});
}
