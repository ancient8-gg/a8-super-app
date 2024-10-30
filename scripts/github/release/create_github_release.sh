RC_BRANCH=staging

# Get latest tag on local
TAG=$(git describe --tags --abbrev=0)

# Check existence of tag on remote
[[ $(git ls-remote --tags --exit-code origin refs/tags/$TAG) ]] && echo "Tag $TAG already exists, skipping the release." && exit 0

# Push latest tag to remote
git push origin $TAG

# Set prerelease flag
PRERELEASE_FLAG=false
[[ $BRANCH = $RC_BRANCH ]] && PRERELEASE_FLAG=true

# Create GitHub release
gh release create "$TAG" \
  --verify-tag \
  --repo="$GITHUB_REPOSITORY" \
  --title="${TAG}" \
  --prerelease=$PRERELEASE_FLAG \
  --generate-notes
