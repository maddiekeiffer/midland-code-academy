import getGifs from '../../functions/getGifs';
import fetchMock from 'jest-fetch-mock';

fetchMock.enableMocks();

describe('getGifs', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  it('returns an array of GIFs', async () => {
    const expected = [
      {
        gif_id: 'abc123',
        title: 'funny dog',
        url: 'https://giphy.com/gifs/funny-dog',
      },
      {
        gif_id: 'def456',
        title: 'silly cat',
        url: 'https://giphy.com/gifs/silly-cat',
      },
    ];

    fetch.mockResponseOnce(JSON.stringify({
      data: expected.map(({ gif_id, title, url }) => ({
        id: gif_id,
        title,
        images: {
          original: { url },
        },
      })),
    }));

    const result = await getGifs('&q=funny dog');

    expect(result).toEqual(expected);
  });

  it('throws an error if the response is not OK', async () => {
    fetch.mockResponseOnce('', { status: 404 });

    await expect(getGifs('&q=funny dog')).rejects.toThrow('HTTP error! status: 404');
  });
});