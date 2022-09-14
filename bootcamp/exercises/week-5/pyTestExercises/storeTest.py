import pytest

@pytest.fixture
def store():
  items = ("apple", "banana", "orange")
  amount = (2, 2, 1)
  return dict(zip(items, amount)) 

def buy_banana(store):
    store["banana"] = store["banana"] -1 

def buy_2_bananas(store):
    store["banana"] = store["banana"] -2

def test_buy_banana(store):
  buy_banana(store)
  assert store["banana"] ==  1

def test_buy_2_bananas(store):
    buy_2_bananas(store)
    assert store["banana"] == 0