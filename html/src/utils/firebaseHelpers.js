export const getTruthyOnly = (obj) => Object.keys(obj).filter(key => obj[ key ])
export const parseSnapshotArray = (arr, withKey) =>
  arr.map(
    snapshot => withKey
      ? { key: snapshot.key, ...snapshot.val() }
      : snapshot.val()
  )
